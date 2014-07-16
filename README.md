### nypd_sqf

Visualizing nypd stop and frisks made in 2012.

[thatplaybyplay.com/wheres_the_bus_stop/](http://thatplaybyplay.com/wheres_the_bus_stop/ "Where's the Bus Stop?")

## Setup

Create and activate your virtual environment:
```
virtualenv env
source env/bin/activate
```

Install openpyxl:
```
pip install openpyxl
```

Download the stop and frisk data:
```
curl -O http://www.nyclu.org/files/stopandfrisk/Stop-and-Frisk-2012.zip
unzip Stop-and-Frisk-2012.zip
```

Generate the final dataset:
```
python datagen.py
```
