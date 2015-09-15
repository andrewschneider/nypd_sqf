#### Visualizing nypd stop and frisks made in 2012.

[andrewschneider.io/nypd_sqf/](http://andrewschneider.io/nypd_sqf/ "SQF Data Visualization")

#### Setup

Create and activate your virtual environment:
```
virtualenv env
source env/bin/activate
```

Install openpyxl:
```
pip install -r requirements.txt
```

Download the stop and frisk data:
```
curl -O http://www.nyc.gov/html/nypd/downloads/zip/analysis_and_planning/2012_sqf_csv.zip
unzip 2012_sqf_csv.zip
```

Generate the final dataset:
```
python datagen.py
```
