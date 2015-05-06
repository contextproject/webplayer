package controllers;

import play.*;
import play.mvc.*;
import snippet.RandomSnippet;
import views.html.*;

public class Application extends Controller {

    public static Result index() {
    	RandomSnippet snpt = new RandomSnippet();
        return ok(index.render(snpt.getStart()));
    }
}
