/* eslint-disable */



/**
 * The Product Master Driver is intended to enable clients to consume the Product Definition.
 *
 * By pattern, client applications should *NOT* directly integrate with the Product Definition payload,
 * as that is subject to change.  The methods in this interface should be considered stable and
 * client applications can be built with them.
 *
 * When data (the collected user data) is required as a parameter, it is passed to the client
 * in a flat Map type structure of key=value.  The keys are string locators for the field
 * for field in the hierarchy defined in the Product Master. The exact format is TBD, but
 * the names used for data will match the names that are returned in the getFormState
 * method.
 *
 * Documentation in the product-master-driver-interface repo:
 * https://bitbucket.mutualofomaha.com/projects/EBPA/repos/product-master-driver-interface/browse/src/main/java/com/mutualofomaha/ebpa/ProductMasterDriver.java
 */

/**
 * Initialize a Product Master instance by retrieving a Product Definition from
 * the Product Master services with a given product name and effective date
 *
 * @param productName the name of the product
 * @param effectiveDate the effective date, if null will use the current date/time.
 */
export const init = async (productName, effectiveDate = null) => Promise.resolve(true);

/**
 * Determines the UI form state based on a current set of data.
 *
 * A UI can call this with `null` data to get an initial structure of the form,
 * and will typically re-call this method with updated data after every
 * field change (e.g., onBlur)
 *
 * @param formName - the name of the FormContext to determine the fields and layout to return
 * @param data - the current data set as a Map (Key/Value Pair)
 * @return the new form model
 */
export const getFormState = (formName, data = null) => require('./example-form');

/*/
As per conversation with Heads in the Cloud, Phoenix team will send the viewData which is a flat map for validation. They will then use
this viewData map to merge with the filed value from the JSON coming from Scotra. The method below simulates that logic
 */
export const validateAndReturnedFormWithError =  async (formName, form, viewData ) => {
  let mockForm = form || require('./example-form-with-error')
  let mockViewData = viewData;
  mockForm.sections.forEach(section => {
        section.rows.forEach(row => {
           row.fields.forEach(field => {
             Object.keys(mockViewData).forEach(key => {
               if ( key === field.name){
                 field.value = mockViewData[key].value;
               }
             })
            });
        });
    });
  return { mockForm, mockViewData};
}
