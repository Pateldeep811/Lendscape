package com.lendscape.pages;

import com.lendscape.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//button[text()='Request a demo']")
    WebElement clickRequestADemo;

    public void clickOnRequestADemo () {
        clickOnElement(clickRequestADemo);
    }
    @CacheLookup
    @FindBy(xpath = "//li[3]//a")
    WebElement About;
    @CacheLookup
    @FindBy (xpath = "//li[3]//div//div//div[@class='menu-col']/a")
    List<WebElement> Menulist;

    public void clickOnAbout (String module) throws InterruptedException {
        for (WebElement listmenu : Menulist){
            mouseHoverToElement(About);
            if (listmenu.getText().equalsIgnoreCase(module)){
                Thread.sleep(2000);
                listmenu.click();
                break;
            }
        }
    }

}

