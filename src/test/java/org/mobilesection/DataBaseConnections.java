package org.mobilesection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DataBaseConnections {

	public static void main(String[] args) throws ClassNotFoundException, SQLException {
		Class.forName("database path");
		Connection connect = DriverManager.getConnection("jdbc:mysql://localhost8080", "username", "pwd");
		
		Statement state = connect.createStatement();
		ResultSet execution = state.executeQuery("Select * from Database Name");
		while(execution.next()) {
			System.out.println(execution.getString("column name"));
		}
		connect.close();
		
	}
}
 