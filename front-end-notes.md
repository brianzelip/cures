# References and notes from building out the front end

## The Hit List
1. **Portal pic display**: The portal image display is dynamic because the portal pics don't come in a standard orientation, some are portrait some are landscape. The following links helped in figuring out how to display the portal images:

    1. **CSS classes to handle portal pic orientations**: http://addedoptimization.com/css-styling-image-height-and-width-while-maintaining-aspect-ratio/

        The insight here was:
            
        ``` css
        img.resize{height:80px;width:auto;}
        
        img.resize{height:auto;width:80px;}
        ```

        The above example was the basis for creating 2 (responsive) classes used herein (which is highly reusable for any other project):
        
        ``` css
        .landscape {
          height: 75px;
          width: auto;
          height: auto;
          width: 75px;  
        }

        .portrait {
          height: auto;
          width: 75px;
          height: 75px;
          width: auto;
        }
        ```
    2. **Javascript to dynamically add orientation classes**: http://stackoverflow.com/a/29218922/2145103

        The above Stack Overflow answer provided the script found in hitlist.html.

2. **The Hit List list numbering**: The Hit List uses a [CSS counter](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Counters) to style the portal order number. This [CSS Tricks article](https://css-tricks.com/numbering-in-style/) was the main reference in achieving this.

3. **rotobs.txt**: We'd like to keep our URL out of search engine indexes. Of course, being on github makes us wide open to our data. But the source scripts are not (as of 2015-03-27) on github. The following links were helpful in adding the robots.txt file and the HTML `<meta>` data that have been included in our documents:
  1. http://www.robotstxt.org/robotstxt.html
  2. https://www.inmotionhosting.com/support/website/restricting-bots/how-to-stop-search-engines-from-crawling-your-website
  3. https://support.google.com/webmasters/answer/6062608?hl=en
  4. http://searchengineland.com/removing-pages-from-google-53086

4. **AP list level indicator image**: The web app [Ingressup](http://ingressup.appspot.com) was used to create the AP list image. Before using the app, a png file was made that was 600px by 600px with a transparent background. This png was then uploaded to Ingressup with the settings: Resistance, Level 16, and fully transparent background. The present image is the output of Ingressup.

5. **Random kitten-in-blue-blankey image generator**: [This Stack Overflow answer](http://stackoverflow.com/a/16428237/2145103) provided the solution for loading the randomly selected image of a kitten in a blue blankey at the top of the Fielding  list page. All images were retrieved from a google image search for "cat blue blanket".

6. **Corrected local dev permalinks & dynamic list navigation links**:
  1. Corrected local dev permalinks: (this is minor info for the group and site, but useful for anyone using Jekyll) The first couple weeks of using our new site, the local deveopment of the site required going to http://localhost:4000/hitlist.html instead of http://localhost:4000/hitlist/. The solution was to change the permalink build settings in _config.yml from `permalinks: pretty` to `permalink: pretty`. The discussion in [this Jeyll issue](https://github.com/jekyll/jekyll/issues/2399) helped me come to the solution.
  2. Dynamic list navigation links: There are many posts online discussing how to make navigation items dynamically receive a CSS class of `active` if the link represents the currently viewed page. Many of the examples are a bit complex. In the end, [this very simple explanation](http://jekyllsnippets.com/active-tabs-in-nav/) provided the solution that is at play in our current CURes.blue site.

7. **Javascript tabs for all lists displayed in one page**: [This tutorial on jquery tabs](http://www.jacklmoore.com/notes/jquery-tabs) provided the solution to hide all list data on one page except the currently selected list. This new list design was the content of a recent commit providing the new link http://CURes.blue/intel.