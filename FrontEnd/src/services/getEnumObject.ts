export interface enumArray {
    key: string;
    value: string;
  }
  
  export const getEnumArray = (enumObject: object): enumArray[] => {
    var response: enumArray[] = [];
    const keys2 = Object.keys(enumObject);
    
    const values2 = Object.values(enumObject);
  
    keys2.forEach((key, i) => {
      response.push({
        key,
        value: values2[i],
      });
    });
  
    return response;
  };

  export const getKeyByValueEnum = (enumObject: object, enumValue: any) => {
    const indexEnum = Object.values(enumObject).indexOf(enumValue);
    return Object.keys(enumObject)[indexEnum];
  }
  