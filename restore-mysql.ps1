# restore-mysql.ps1
# Run this from the folder where 'mysql-backup.tar.gz' exists

$volumeName = "keycloak-and-mysql-volume"
$backupFile = "mysql-backup.tar.gz"
$localDir = (Get-Location).Path

Write-Host "🔄 Creating volume '$volumeName' if it doesn't exist..."
docker volume create $volumeName | Out-Null

Write-Host "♻️ Restoring backup from '$backupFile' into volume '$volumeName'..."

docker run --rm `
  -v ${volumeName}:/volume `
  -v ${localDir}:/backup `
  alpine `
  sh -c "cd /volume && tar xzvf /backup/${backupFile}"

Write-Host "✅ Restore complete. You can now run docker-compose up."
