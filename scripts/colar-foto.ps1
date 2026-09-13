param([Parameter(Mandatory = $true)][string]$Nome)

Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

$destino = Join-Path $PSScriptRoot "..\public\images\$Nome.jpg"
$imagem = [System.Windows.Forms.Clipboard]::GetImage()

if (-not $imagem) {
  $arquivos = [System.Windows.Forms.Clipboard]::GetFileDropList()
  if ($arquivos.Count -gt 0) { $imagem = [System.Drawing.Image]::FromFile($arquivos[0]) }
}

if (-not $imagem) {
  Write-Host "Nenhuma imagem copiada. Clique com o botao direito na foto > Copiar imagem, e rode de novo."
  exit 1
}

$escala = [Math]::Min(1, 1600 / $imagem.Height)
$largura = [int]($imagem.Width * $escala)
$altura = [int]($imagem.Height * $escala)
$bitmap = New-Object System.Drawing.Bitmap $largura, $altura
$grafico = [System.Drawing.Graphics]::FromImage($bitmap)
$grafico.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$grafico.DrawImage($imagem, 0, 0, $largura, $altura)

$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$params = New-Object System.Drawing.Imaging.EncoderParameters 1
$params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality), 82L
$bitmap.Save((Resolve-Path (Split-Path $destino)).Path + "\$Nome.jpg", $codec, $params)

$grafico.Dispose(); $bitmap.Dispose(); $imagem.Dispose()
Write-Host "Salvo: public/images/$Nome.jpg ($largura x $altura)"
