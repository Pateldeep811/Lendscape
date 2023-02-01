$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/LendscapeHomePage.feature");
formatter.feature({
  "line": 1,
  "name": "HomePageMenuTest",
  "description": "As a user i should navigate to menu page by click.",
  "id": "homepagemenutest",
  "keyword": "Feature"
});
formatter.before({
  "duration": 15359146700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "verify i should able to click Request a demo Button",
  "description": "",
  "id": "homepagemenutest;verify-i-should-able-to-click-request-a-demo-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on home page.",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Request a demo button.",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am navigated on Request a demo Form.",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 397187700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnRequestADemoButton()"
});
formatter.result({
  "duration": 235764400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iAmNavigatedOnRequestADemoForm()"
});
formatter.result({
  "duration": 36800,
  "status": "passed"
});
formatter.after({
  "duration": 183700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "verify i should navigate inside the module page.",
  "description": "",
  "id": "homepagemenutest;verify-i-should-navigate-inside-the-module-page.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on home page.",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I MouseHover on top menu \"\u003cAbout\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I am navigated on About Dropdown Menu.",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "homepagemenutest;verify-i-should-navigate-inside-the-module-page.;",
  "rows": [
    {
      "cells": [
        "About"
      ],
      "line": 14,
      "id": "homepagemenutest;verify-i-should-navigate-inside-the-module-page.;;1"
    },
    {
      "cells": [
        "Company Overview"
      ],
      "line": 15,
      "id": "homepagemenutest;verify-i-should-navigate-inside-the-module-page.;;2"
    },
    {
      "cells": [
        "Leadership"
      ],
      "line": 16,
      "id": "homepagemenutest;verify-i-should-navigate-inside-the-module-page.;;3"
    },
    {
      "cells": [
        "Our Clients"
      ],
      "line": 17,
      "id": "homepagemenutest;verify-i-should-navigate-inside-the-module-page.;;4"
    },
    {
      "cells": [
        "Contact"
      ],
      "line": 18,
      "id": "homepagemenutest;verify-i-should-navigate-inside-the-module-page.;;5"
    },
    {
      "cells": [
        "Trust and Compliance"
      ],
      "line": 19,
      "id": "homepagemenutest;verify-i-should-navigate-inside-the-module-page.;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8092391100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "verify i should navigate inside the module page.",
  "description": "",
  "id": "homepagemenutest;verify-i-should-navigate-inside-the-module-page.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on home page.",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I MouseHover on top menu \"Company Overview\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I am navigated on About Dropdown Menu.",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 5648400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company Overview",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.iMouseHoverOnTopMenu(String)"
});
formatter.result({
  "duration": 4882073100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iAmNavigatedOnAboutDropdownMenu()"
});
formatter.result({
  "duration": 44800,
  "status": "passed"
});
formatter.after({
  "duration": 55800,
  "status": "passed"
});
formatter.before({
  "duration": 10797103500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "verify i should navigate inside the module page.",
  "description": "",
  "id": "homepagemenutest;verify-i-should-navigate-inside-the-module-page.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on home page.",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I MouseHover on top menu \"Leadership\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I am navigated on About Dropdown Menu.",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 4353900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leadership",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.iMouseHoverOnTopMenu(String)"
});
formatter.result({
  "duration": 4691406500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iAmNavigatedOnAboutDropdownMenu()"
});
formatter.result({
  "duration": 32300,
  "status": "passed"
});
formatter.after({
  "duration": 51100,
  "status": "passed"
});
formatter.before({
  "duration": 10072459700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "verify i should navigate inside the module page.",
  "description": "",
  "id": "homepagemenutest;verify-i-should-navigate-inside-the-module-page.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on home page.",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I MouseHover on top menu \"Our Clients\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I am navigated on About Dropdown Menu.",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 252176900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Our Clients",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.iMouseHoverOnTopMenu(String)"
});
formatter.result({
  "duration": 7131997700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iAmNavigatedOnAboutDropdownMenu()"
});
formatter.result({
  "duration": 33700,
  "status": "passed"
});
formatter.after({
  "duration": 47200,
  "status": "passed"
});
formatter.before({
  "duration": 10844030700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "verify i should navigate inside the module page.",
  "description": "",
  "id": "homepagemenutest;verify-i-should-navigate-inside-the-module-page.;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on home page.",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I MouseHover on top menu \"Contact\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I am navigated on About Dropdown Menu.",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 8980300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.iMouseHoverOnTopMenu(String)"
});
