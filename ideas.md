# Thinking about private GH hosting and Rsyncing to new server


Agents have a copy of the repository on a local machine from the private GitHub repo.

Development happens by agents on their local machines; the private GH repo is considered the **shipped/master version**.

There's a Digital Ocean web server.

The CURES.BLUE domain name registrar is Godaddy and Brian Zelip is the owner.

The CURES.BLUE domain costs less than $20/year.

The initial system functioned where a machine uses Python to scrap and manipulate Niantic and other online data. This data is then automatically pushed to the CUResistance GH repo. The Cures.blue website is built with Jekyll and is configured to feed Weaselfork's data push into the web template.

Once the web engine receives the updated data, it re-builds and outputs a static site.



Devs < > Private remote
       > Digital ocean


Questions for Weaselfork:
- can the python scripts do their thing on the same digital ocean machine that serves the site?
- It seems to me the digital ocean machine needs to replace the data engine that is Weasel's old linux box.