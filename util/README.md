# Convert Excel sheet to JSON

## Usage

`convert_to_json.js` is used to convert excel to JSON.
`json_to_data_dir.js` has the transformation code to adhere to the required JSON format.

_`data/all_data.json` and `data/all_data.json` will be modified as per the new excel_

### Note

-   Make sure excel file name is `report.xlsx`

-   The sheet name in the file MUST be `Sheet 1`

-   Excel sheet should ONLY have the following columns headers (case sensitive):

    **CODE**

    **TITLE**

    **TYPE**

    **VENUE**

    **FACULTY**

    **CREDITS**

    **SLOT**

-   The scipt may need to be modified depending upon the data in `report`.

-   Use https://simplypdf.com/Excel to convert PDF to Excel.

## TODO

[ ] Add script to automate PDF -> XLSX conversion (could change cos, VIT ¯\\\_(ツ)\_/¯)
