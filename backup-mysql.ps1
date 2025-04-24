# backup-mysql.ps1
# Run this from the folder where you want to save the backup

$volumeName = "keycloak-and-mysql-volume"
$backupFile = "mysql-backup.tar.gz"
$localDir = (Get-Location).Path

Write-Host "🔄 Backing up volume '$volumeName' to '$backupFile'..."

docker run --rm `
  -v ${volumeName}:/volume `
  -v ${localDir}:/backup `
  alpine `
  tar czvf /backup/${backupFile} -C /volume .

Write-Host "✅ Backup complete: $localDir\$backupFile"
