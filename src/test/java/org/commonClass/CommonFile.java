package org.commonClass;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class CommonFile {
	public static WebDriver w;
	
	public void startBrowser() {
	    WebDriverManager.chromedriver().setup();
	    w=new ChromeDriver();
	}
	public void closeBrowser() {
		w.quit();
	}
	public void closeTab() {
		w.close();
	}
	public void input(WebElement e, String value) {
		e.sendKeys(value);
	}
	public void touch(WebElement e) {
		e.click();
	}
	public void delete(WebElement e) {
		e.clear();
	}
	public void itime() {
		w.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}
	public void time(int s) throws InterruptedException {
		int x = s*1000;
		Thread.sleep(s);
	}
}
