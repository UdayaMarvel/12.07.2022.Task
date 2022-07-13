$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/FlipkartMobiles.feature");
formatter.feature({
  "name": "FlipkartMobile",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@mobile"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "MobileSection.launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "go to url \"http://www.flipkart.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileSection.go_to_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username \"udaya\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileSection.enter_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password \"123455678\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileSection.enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "When "
});
formatter.match({
  "location": "MobileSection.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the login page",
  "keyword": "And "
});
formatter.match({
  "location": "MobileSection.close_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@mobile"
    },
    {
      "name": "@search"
    }
  ]
});
formatter.step({
  "name": "click the searchbar",
  "keyword": "Given "
});
formatter.match({
  "location": "MobileSection.click_the_searchbar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the mobile name\"mobiles\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileSection.enter_the_mobile_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click search button",
  "keyword": "When "
});
formatter.match({
  "location": "MobileSection.click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "searches",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@mulitple"
    }
  ]
});
formatter.step({
  "name": "click the searchbar",
  "keyword": "Given "
});
formatter.step({
  "name": "enter the mobile name\"\u003cmobiles\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "click search button",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "mobiles"
      ]
    },
    {
      "cells": [
        "Realme"
      ]
    },
    {
      "cells": [
        "Poco"
      ]
    },
    {
      "cells": [
        "iPhone"
      ]
    },
    {
      "cells": [
        "redmi"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "MobileSection.launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "go to url \"http://www.flipkart.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileSection.go_to_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username \"udaya\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileSection.enter_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password \"123455678\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileSection.enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "When "
});
formatter.match({
  "location": "MobileSection.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the login page",
  "keyword": "And "
});
formatter.match({
  "location": "MobileSection.close_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "searches",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@mobile"
    },
    {
      "name": "@mulitple"
    }
  ]
});
formatter.step({
  "name": "click the searchbar",
  "keyword": "Given "
});
formatter.match({
  "location": "MobileSection.click_the_searchbar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the mobile name\"Realme\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileSection.enter_the_mobile_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click search button",
  "keyword": "When "
});
formatter.match({
  "location": "MobileSection.click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "MobileSection.launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "go to url \"http://www.flipkart.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileSection.go_to_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username \"udaya\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileSection.enter_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password \"123455678\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileSection.enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "When "
});
formatter.match({
  "location": "MobileSection.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the login page",
  "keyword": "And "
});
formatter.match({
  "location": "MobileSection.close_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "searches",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@mobile"
    },
    {
      "name": "@mulitple"
    }
  ]
});
formatter.step({
  "name": "click the searchbar",
  "keyword": "Given "
});
formatter.match({
  "location": "MobileSection.click_the_searchbar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the mobile name\"Poco\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileSection.enter_the_mobile_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click search button",
  "keyword": "When "
});
formatter.match({
  "location": "MobileSection.click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "MobileSection.launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "go to url \"http://www.flipkart.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileSection.go_to_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username \"udaya\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileSection.enter_username(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d103.0.5060.53)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027VICKIEJAY-18\u0027, ip: \u0027192.168.0.141\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.1.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.53, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\jaias\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57390}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: a7ed6a4d347e4fd52c4813f24fc2d80f\n*** Element info: {Using\u003dxpath, value\u003d//input[@class\u003d\u0027_2IX_2- VJZDxU\u0027]}\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy18.sendKeys(Unknown Source)\r\n\tat org.commonClass.CommonFile.input(CommonFile.java:25)\r\n\tat org.mobilesection.MobileSection.enter_username(MobileSection.java:35)\r\n\tat ✽.enter username \"udaya\"(src/test/resources/FlipkartMobiles.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "enter password \"123455678\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileSection.enter_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click login button",
  "keyword": "When "
});
formatter.match({
  "location": "MobileSection.user_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close the login page",
  "keyword": "And "
});
formatter.match({
  "location": "MobileSection.close_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "searches",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@mobile"
    },
    {
      "name": "@mulitple"
    }
  ]
});
formatter.step({
  "name": "click the searchbar",
  "keyword": "Given "
});
formatter.match({
  "location": "MobileSection.click_the_searchbar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter the mobile name\"iPhone\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileSection.enter_the_mobile_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click search button",
  "keyword": "When "
});
formatter.match({
  "location": "MobileSection.click_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "MobileSection.launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "go to url \"http://www.flipkart.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileSection.go_to_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username \"udaya\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileSection.enter_username(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d103.0.5060.53)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027VICKIEJAY-18\u0027, ip: \u0027192.168.0.141\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.1.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.53, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\jaias\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57429}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9396a94ef93e3fd9106ff103168cc41a\n*** Element info: {Using\u003dxpath, value\u003d//input[@class\u003d\u0027_2IX_2- VJZDxU\u0027]}\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy18.sendKeys(Unknown Source)\r\n\tat org.commonClass.CommonFile.input(CommonFile.java:25)\r\n\tat org.mobilesection.MobileSection.enter_username(MobileSection.java:35)\r\n\tat ✽.enter username \"udaya\"(src/test/resources/FlipkartMobiles.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "enter password \"123455678\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileSection.enter_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click login button",
  "keyword": "When "
});
formatter.match({
  "location": "MobileSection.user_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close the login page",
  "keyword": "And "
});
formatter.match({
  "location": "MobileSection.close_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "searches",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@mobile"
    },
    {
      "name": "@mulitple"
    }
  ]
});
formatter.step({
  "name": "click the searchbar",
  "keyword": "Given "
});
formatter.match({
  "location": "MobileSection.click_the_searchbar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter the mobile name\"redmi\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileSection.enter_the_mobile_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click search button",
  "keyword": "When "
});
formatter.match({
  "location": "MobileSection.click_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});