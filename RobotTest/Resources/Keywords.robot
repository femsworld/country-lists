*** Setting ***

Documentation     Open Homepage
Library            SeleniumLibrary
Resource          ../Resources/Variables.robot


*** Keywords ***

Navigate To Homepage
    Open Browser        ${URL}    ${BROWSER}
    Maximize Browser Window
    wait until element is visible       ${homepage}


Assert user is on the HomePage
     Page should contain     ${homepage}
     [Teardown]              Close Browser

Click the detail button
    Wait until element is visible   ${detailBtn}
    Click element   ${detailBtn}

Search for Countries
    Wait Until Element Is Visible    ${search}
    Click element   ${search}
    Sleep    5s
    input text   ${search}   ${inputText}
    Sleep  5s