
@mobile
Feature: FlipkartMobile
Background:
Given Launch browser
Then go to url "http://www.flipkart.com"
Then enter username "udaya"
Then enter password "123455678"
When user click login button
And close the login page

@search
Scenario: search
Given click the searchbar
Then enter the mobile name"mobiles"
When click search button

@mulitple
Scenario Outline: searches
Given click the searchbar
Then enter the mobile name"<mobiles>"
When click search button

Examples:
|mobiles|
|Realme|
|Poco|
|iPhone|
|redmi|