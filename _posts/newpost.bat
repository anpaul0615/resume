@echo off

:: ����ð�
set now_date=%date%
set now_hour=%time:~0,2%
set now_min=%time:~3,2%
set now_sec=%time:~6,2%
set filename=%now_date%-%now_hour%-%now_min%-%now_sec%.md

:: ���ø����� ����
copy .\template.md .\%filename%