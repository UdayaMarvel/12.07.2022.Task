package org.locators;

import org.commonClass.CommonFile;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Locators extends CommonFile {

	public Locators() {
		PageFactory.initElements(CommonFile.w, this);
	}
	@FindBy(xpath="//input[@class='_2IX_2- VJZDxU']")
	private WebElement username;
	
	@FindBy(xpath="//input[@class='_2IX_2- _3mctLh VJZDxU']")
	private WebElement password;
	
	@FindBy(xpath="//button[@class='_2KpZ6l _2HKlqd _3AWRsL']")
	private WebElement login;
	
	public WebElement getCloseLogin() {
		return closeLogin;
	}
	@FindBy(xpath="//button[@class='_2KpZ6l _2doB4z']")
	private WebElement closeLogin;
	
	@FindBy(name="q")
	private WebElement search;
	
	public WebElement getUsername() {
		return username;
	}

	public WebElement getPassword() {
		return password;
	}

	public WebElement getLogin() {
		return login;
	}

	public WebElement getSearch() {
		return search;
	}

	public WebElement getIcon() {
		return icon;
	}
	@FindBy(xpath="//button[@class='L0Z3Pu']")
	private WebElement icon;
}
