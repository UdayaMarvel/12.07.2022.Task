package org.mobilesection;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;

import javax.xml.bind.JAXB;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBElement;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.util.JAXBSource;



public class XMLReader {
	
	public static void main(String[] args) throws FileNotFoundException, JAXBException {
		
		JAXBContext jb = JAXBContext.newInstance(Hooks.class); 
		Marshaller marsh = jb.createMarshaller();
		marsh.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);	
		Declaration pf = new Declaration();
		
		pf.setMobilename("realme");
		pf.setUsername("udaya");
		pf.setPwd("21432232");
		pf.setUrl("www.flipkart.com");
		
		pf.getMobilename();
		pf.getUsername();
		pf.getPwd();
		pf.getUrl();
		
		
		File f = new File(".//target//credentials.xml");
		FileOutputStream f1 = new FileOutputStream(f);
		
		marsh.marshal(pf, f1);
		
		
		
		
	}
}
