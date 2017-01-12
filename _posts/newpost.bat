﻿@echo off

# 현재시각
set now_date=%date%
set now_hour=%time:~0,2%
if "%now_hour:~0,1%" == " " set now_hour=0%now_hour:~1,1%
set now_min=%time:~3,2%
if "%now_min:~0,1%" == " " set now_min=0%now_min:~1,1%
set now_sec=%time:~6,2%
if "%now_sec:~0,1%" == " " set now_sec=0%now_sec:~1,1%
set filename=%now_date%-%now_hour%-%now_min%-%now_sec%.md


# 템플릿파일 작성
@chcp 65001
@echo --- >> .\%filename%
@echo layout: base >> .\%filename%
@echo category: "diary" >> .\%filename%
@echo date: %now_date% %now_hour%:%now_min%:%now_sec%  >> .\%filename%
@echo title: "hello" >> .\%filename%
@echo tags: >> .\%filename%
@echo --- >> .\%filename%

@echo. >> .\%filename%
@echo ### {{ page.title }} ^<small^>{{ page.date ^| date: "%%Y-%%m-%%d" }}^</small^> >> .\%filename%
@echo --- >> .\%filename%
@echo. >> .\%filename%

@echo ^>hello >> .\%filename%
@echo. >> .\%filename%

@echo hello >> .\%filename%
@echo hello >> .\%filename%
