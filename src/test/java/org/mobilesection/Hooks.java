package org.mobilesection;

import org.commonClass.CommonFile;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends CommonFile {
	
	CommonFile cf = new CommonFile();
	@Before
	public void starts() {
		cf.startBrowser();
	}
	@After
	public void end() {
		cf.closeBrowser();
	}
}
