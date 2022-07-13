package org.mobilesection;

import org.commonClass.CommonFile;
import org.locators.Locators;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class MobileSection extends CommonFile {
	CommonFile cf = new CommonFile();
	Locators l = new Locators();
	
	
	@Given("Launch browser")
	public void launch_browser() {
		
	   System.out.println("browser launched");
	}

	@Then("go to url {string}")
	public void go_to_url(String url) {
		cf.itime();
	  w.get(url);
	}

	@Then("enter username {string}")
	public void enter_username(String uname) throws InterruptedException {
		cf.itime();
	   cf.input(l.getUsername(), uname);
	}

	@Then("enter password {string}")
	public void enter_password(String password) throws InterruptedException {
		cf.itime();
		cf.input(l.getPassword(), password);
	}

	@When("user click login button")
	public void user_click_login_button() throws InterruptedException {
		cf.itime();
		cf.touch(l.getLogin());
	}

	@When("close the login page")
	public void close_the_login_page() {
		cf.itime();
	   cf.touch(l.getCloseLogin());
	}

	@Given("click the searchbar")
	public void click_the_searchbar() {
	 cf.touch(l.getSearch());
	}

	@Then("enter the mobile name{string}")
	public void enter_the_mobile_name(String mobile) {
		cf.itime();
	    cf.input(l.getSearch(), mobile);
	}

	@When("click search button")
	public void click_search_button() {
		cf.itime();
	   cf.touch(l.getIcon());
	}
}
