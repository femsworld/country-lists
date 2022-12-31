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
    Click element   ${search}
     [Teardown]              Close Browser

Click the detail button
    Wait until element is visible   ${detailBtn}
    Click element   ${detailBtn}

Assert user is the detail Window
    Sleep    5s
    Click element   ${threeDots}
    [Teardown]              Close Browser

Search for Countries
    Wait Until Element Is Visible    ${search}
    Click element   ${search}
    Sleep    5s
    input text   ${search}   ${inputText}
    Sleep  5s

Assert user is search for right Country
    Sleep    5s
    Page should contain     Finland
    Sleep    5s
    [Teardown]              Close Browser