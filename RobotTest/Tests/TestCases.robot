*** Setting ***
Documentation     Country List Page
Library           SeleniumLibrary
Resource          ../Resources/Keywords.robot
Resource          ../Resources/Variables.robot


*** Test Cases ***

Go to Homepage
     Navigate To Homepage
     Assert user is on the HomePage

Go to Details page
     Navigate To Homepage
     Click the detail button
     Assert user is the detail Window

Search Field
     Navigate To Homepage
     Search for Countries
     Assert user is search for right Country