*** Setting ***

Documentation     Open Homepage
Library            SeleniumLibrary
Resource          ../Resources/Variables.robot


*** Keywords ***

Navigate To Homepage
    Open Browser        ${URL}    ${BROWSER}
    Maximize Browser Window