package controllers;

import database.Database;
import play.*;
import play.mvc.*;
import snippet.RandomSnippet;
import views.html.*;

public class Application extends Controller {

    public static Result index() {
    	RandomSnippet snpt = new RandomSnippet();
        return ok(index.render(snpt.getStart()));
    }

    public static void testDatabaseConnection() {
        Database db = new Database();
    }
}
