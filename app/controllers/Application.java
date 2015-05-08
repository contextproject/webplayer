package controllers;

import database.Database;
import play.*;
import play.mvc.*;
import snippet.RandomSnippet;
import views.html.*;

public class Application extends Controller {

	private static RandomSnippet snpt;
	
    public static Result index() {
    	String url = "w.soundcloud.com/tracks/202852531";
    	snpt = new RandomSnippet();
        return ok(index.render(url, snpt.getStart()));
    }

    public static void testDatabaseConnection() {
        //Database db = new Database();
    }
    
    public static Result getStartTime(String url) {
    	RandomSnippet snpt = new RandomSnippet();
    	String url2 = "w.soundcloud.com/tracks/" + url;
        return ok(index.render(url2, snpt.getStart()));
    }
}
