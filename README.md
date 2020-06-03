# Protractor

Best Practices:
1. Helpers - should contain common functions that can be used across different screens

2. Pageobject - create separate pageobject file for each screen. Each file should contain objects and functions related to the specific page

3. Specs - create separate spec file for each screen. The spec file should not conatin any object or test data. The objects should be referenced from the Pageobject files and testdata should be referenced from the testdata files

4. Testdata - all testdata should be stored here. 
If you website supports different languages then you can create testdata files for each language. All the data files should have the same label names. You can set global variable to read data from specific language file (Check protractor.config.js)
