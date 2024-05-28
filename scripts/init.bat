@echo off

for %%a in ("components", "docs", "core", "hooks", "utils", "theme") do (
	echo %%a
	md %%a
	cd %%a
	yarn init
	cd ..
)

pause