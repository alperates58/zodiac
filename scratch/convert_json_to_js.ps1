$projectDir = "c:\Users\alper\Desktop\zodiacrf"
$dataDir = Join-Path $projectDir "data"

# 1. Cities
$citiesJson = Get-Content -Raw -Path (Join-Path $dataDir "cities.json")
$citiesJs = "const cityDatabase = " + $citiesJson + ";"
[System.IO.File]::WriteAllText((Join-Path $dataDir "cities.js"), $citiesJs, [System.Text.Encoding]::UTF8)
Write-Host "Converted cities.json to cities.js"

# 2. Dictionary
$dictJson = Get-Content -Raw -Path (Join-Path $dataDir "dictionary.json")
$dictJs = "const dictionaryData = " + $dictJson + ";"
[System.IO.File]::WriteAllText((Join-Path $dataDir "dictionary.js"), $dictJs, [System.Text.Encoding]::UTF8)
Write-Host "Converted dictionary.json to dictionary.js"

# 3. Search Index
$searchJson = Get-Content -Raw -Path (Join-Path $dataDir "search-index.json")
$searchJs = "const searchIndex = " + $searchJson + ";"
[System.IO.File]::WriteAllText((Join-Path $dataDir "search-index.js"), $searchJs, [System.Text.Encoding]::UTF8)
Write-Host "Converted search-index.json to search-index.js"

# 4. Daily Horoscopes
$horoJson = Get-Content -Raw -Path (Join-Path $dataDir "daily-horoscopes.json")
$horoJs = "const dailyHoroscopes = " + $horoJson + ";"
[System.IO.File]::WriteAllText((Join-Path $dataDir "daily-horoscopes.js"), $horoJs, [System.Text.Encoding]::UTF8)
Write-Host "Converted daily-horoscopes.json to daily-horoscopes.js"

Write-Host "All JSON database files converted to JS scripts!"
