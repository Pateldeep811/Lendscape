package com.lendscape.steps;

import com.lendscape.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class MyStepdefs {
    HomePage homePage = new HomePage();
    @Given("^I am on home page\\.$")
    public void iAmOnHomePage() {
    }

    @When("^I click on Request a demo button\\.$")
    public void iClickOnRequestADemoButton() {
        homePage.clickOnRequestADemo();
    }

    @Then("^I am navigated on Request a demo Form\\.$")
    public void iAmNavigatedOnRequestADemoForm() {
    }

    @When("^I MouseHover on top menu \"([^\"]*)\"$")
    public void iMouseHoverOnTopMenu(String Menu) throws Throwable {
        new HomePage().clickOnAbout(Menu);
    }

    @And("^I am navigated on About Dropdown Menu\\.$")
    public void iAmNavigatedOnAboutDropdownMenu() {
    }


    }

