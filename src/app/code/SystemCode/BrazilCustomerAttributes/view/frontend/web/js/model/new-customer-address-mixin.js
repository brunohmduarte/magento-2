define([
    'mage/utils/wrapper'
], function (wrapper) {
    'use strict';

    return function (newCustomerAddressFunction) {
        return wrapper.wrap(newCustomerAddressFunction, function (originalNewCustomerAddressFunction, addressData) {
            var result = originalNewCustomerAddressFunction(addressData);
            
            if (typeof result.street != "undefined" &&
                typeof addressData.street != "undefined" &&
                result.street.length != addressData.street.length
            ) {
                result.street = addressData.street;
            }

            return result;
        });
    };
});
