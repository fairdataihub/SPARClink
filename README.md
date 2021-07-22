<br/> <br/>

<p align="center">
  <a href="https://github.com/SPARC-FAIR-Codeathon/SPARClink">
    <img src="https://github.com/SPARC-FAIR-Codeathon/SPARClink/blob/main/docs/images/logo.svg" alt="SPARC link logo" height="150">
  </a>
  <br/>
  <h3 align="center">
    Visualizing the Impact of SPARC
  </h3>
</p>

<p align="center">
  <a href="https://github.com/SPARC-FAIR-Codeathon/SPARClink/blob/main/LICENSE" alt="GitHub license">
    <img src="https://img.shields.io/github/license/SPARC-FAIR-Codeathon/SPARClink" />
  </a>
  <a href="https://github.com/SPARC-FAIR-Codeathon/SPARClink/stargazers" alt="GitHub stars">
    <img src="https://img.shields.io/github/stars/SPARC-FAIR-Codeathon/SPARClink" />
  </a>
  <a href="https://github.com/SPARC-FAIR-Codeathon/SPARClink/network" alt="GitHub forks">
    <img src="https://img.shields.io/github/forks/SPARC-FAIR-Codeathon/SPARClink" />
  </a>
  <a href="https://github.com/SPARC-FAIR-Codeathon/SPARClink/issues" alt="GitHub issues">
    <img src="https://img.shields.io/github/issues/SPARC-FAIR-Codeathon/SPARClink" />
  </a>
  <a href="https://github.com/SPARC-FAIR-Codeathon/SPARClink/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/SPARC-FAIR-Codeathon/SPARClink" alt="GitHub contributors">
  </a>
  <a href="#">
    <img src="https://img.shields.io/github/last-commit/SPARC-FAIR-Codeathon/SPARClink" alt="GitHub last commit">
  </a>
  <a href="#">
    <img src="https://img.shields.io/tokei/lines/github/SPARC-FAIR-Codeathon/SPARClink" alt="Lines of code">
  </a>
  <a href="#">
    <img src="https://badgen.net/badge/Open%20Source%20%3F/Yes%21/blue?icon=github" alt="Open Source? Yes!">
  </a>
  <br/> 
</p>

## Table of content
- [What is SPARClink?](#what-is-sparclink)
  - [NIH SPARC](#nih-sparc)
  - [FAIR Data](#fair-data)
  - [Origin Story](#origin-story)
  - [Goal](#goal)
- [How it works](#how-it-works)
- [Run the project](#run-the-project)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## What is SPARClink?
### NIH SPARC
The NIH Common Fund’s Stimulating Peripheral Activity to Relieve Conditions (SPARC) program aims to transform our understanding of nerve-organ interactions with the intent of advancing bioelectronic medicine towards treatments that change lives. [Learn more about SPARC](https://sparc.science/)

### FAIR Data
By employing a [FAIR](https://www.nature.com/articles/sdata201618) (Findable, Accessible, Interoperable and Reusable) first approach SPARC datasets, protocols and publications generated via the SPARC program is intended to be able to be used by researchers globally with reproducible results. However, at the current moment, there is no real tangible way to show or visualize the usage of SPARC data in outside projects and publications. 

### Origin Story
The SPARClink project was first born as an idea at the 2021 NIH SPARC Codeathon ([More details here](https://sparc.science/help/2021-sparc-fair-codeathon)). The idea behind the topic was created as a method of visualizing citation data on datasets, protocols and publications to determine the degree of use of SPARC material outside of the official channels.

### Goal
The goal of SPARClink is to provide a system that will query all external publications using open source tools and platforms and create an interactable visualization that is helpful to any regular person to showcase the impact that SPARC has on the overall scientific research community. These impact measurements are meant to be used as a showcase of the concept of FAIR data and how good data generation practices and methods are useful in advancing the field of bioelectronic medicine. 

## How it works?
Metadata information on datasets and protocols are extracted from [Pennsieve](https://app.pennsieve.io/), SPARC Airtable database, and [Protocols.io](https://www.protocols.io/workspaces/sparc). This information is queried against the [NIH RePORTER](https://api.reporter.nih.gov/), [NCBI](https://www.ncbi.nlm.nih.gov/), and [Google Scholar](https://serpapi.com/google-scholar-api) to extract citations and create a well connected graph using [d3.js](https://d3js.org/). 

<p align="center">
  <!--<img src="https://user-images.githubusercontent.com/21206996/125478715-d5f83b6f-8a6d-4ef8-a845-952baa27d8da.png" />-->
  <img src="https://github.com/SPARC-FAIR-Codeathon/SPARClink/blob/main/docs/images/sparclink_block_diagram-01.png" width="500"/>
  <br/>
  <span> SPARClink workflow </span>
</p>

## Run the project
Clone or download the repository.
``` bash
git clone https://github.com/SPARC-FAIR-Codeathon/SPARClink.git
```

The development environment uses [Anaconda](https://www.anaconda.com/products/individual) to keep track of the python dependencies. Download Anaconda here: [Anaconda Individual Edition](https://www.anaconda.com/products/individual).

The following would create a new `conda` environment with the dependencies required to run the project.
``` bash
cd SPARClink
conda env create -f environment.yml --prefix ./envs 
conda activate ./env
```

### Testing
Unit tests to verify external APIs are written in Python unittest framework. The tests can be run as shown below:
``` bash
python -m unittest -v tests/test_NIH_NCBI.py
```

### Firebase Backend Implementation
Currently, the central database is implemented as a [Firebase](https://firebase.google.com/) real-time database. The database can be updated by running `FirebaseImplementation.py`. However, this requires a username and a password.

To use your own Firebase instance, setup a Firebase web app as [shown here](https://firebase.google.com/docs/web/setup), and update `firebaseConfig` in `FirebaseImplementation.py` with the new API keys. [Setup a new user](https://firebase.google.com/docs/auth/web/password-auth), and configure the [real-time database](https://firebase.google.com/docs/database/web/start). It is recommended to limit the database write permission to authenticated users. Run `FireabaseImplementation.py` and enter user's email/password when prompted.

``` bash
## Run the backend python server
cd backend
python api.py

## Run the front end
cd frontend
npm install
```


Keep track of the project [here](https://github.com/SPARC-FAIR-Codeathon/SPARClink/projects/1)

## Maintainers
* [Sanjay Soundarajan](https://github.com/megasanjay)
* [Monalisa Achalla](https://github.com/a-monalisa)
* [Jongchan Kim](https://github.com/Kim-Jongchan)
* [Ashutosh Singh](https://github.com/Ashutosh1712)
* [Sachira Kuruppu](https://github.com/rsachira-abi)

## Contributing
See [CONTRIBUTING.md](./CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)

## License
See [LICENSE](./LICENSE)


