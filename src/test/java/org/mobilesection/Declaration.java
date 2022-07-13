package org.mobilesection;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Declaration {
	private String username;
	private String pwd;
	private String mobilename;
	private String url;
	
	@XmlElement
	public String getUsername() {
		return username;
	}
	@XmlElement
	public String getMobilename() {
		return mobilename;
	}
	public void setMobilename(String mobilename) {
		this.mobilename = mobilename;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	@XmlElement
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	@XmlElement
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	
}
