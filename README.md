# SPARClink
SPARClink: Visualizing the Impact of SPARC

## What is SPARClink?
SPARClink is a tool that shows the impact of SPARC generated datasets and their publications on the overall research landscape. This tool is meant to create interactive visualizations (graphs) on the relationships (citations) between datasets, protoccols publications and other external resources. 

## How it works
Metadata information is extracted from [Pennsieve](https://app.pennsieve.io/), and the SPARC Airtable database. This information is queried against the [NIH Reporter](https://api.reporter.nih.gov/) and [Google Scholar](https://serpapi.com/google-scholar-api) to extract citations and create a well connected graph using [d3.js](https://d3js.org/). 

<p align="center">
  <img src="https://user-images.githubusercontent.com/21206996/125396344-41311280-e361-11eb-9a46-1d04adb4afe8.png" />
  <br/>
  <span> SPARClink workflow </span>
</p>

## Created by 
* Sanjay Soundarajan
* Monalisa Achalla
* Jongchan Kim
* Ashutosh Singh
