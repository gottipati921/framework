const order = {
  id: 101,
  customer: {
    profile: null // Profile data is missing
  }
};
//example 2
type User = {
  name: string;
  address?: {
    street?: string;
    city: string;
  };
};

const userWithoutAddress: User = {
  name: "Bob"
};

const profileName1 = order.customer?.profile;
console.log(profileName1); // Output: undefined (no error thrown)

const profileName2 = order.customer?.profile?? 'Guest';
console.log(profileName2); // Output: 'Guest' (default value used)


const profileName4 = order.customer?.profile ?? 'No Profile';
console.log(profileName4); // Output: 'No Profile' (default value used)

const profileName = order.customer?.profile ?? 0;
console.log(profileName); // Output: 'No Profile' (default value used)

const profile = order.customer?.profile ?? '';
console.log(profile); // Output: 'No Profile' (default value used)

const profileName5 = order.customer?.profile ?? 'No Profile';
console.log(profileName5); // Output: 'No Profile' (default value used)

const profileName6 = order.customer?.profile ?? true;
console.log(profileName6); // Output: '' (default value used)

const profileName7 = order.customer?.profile ?? false;
console.log(profileName7); // Output: 'No Profile' (default value used)

//example 2
const street = userWithoutAddress.address?.street ?? 'Unknown Street';
console.log(street); // Output: 'Unknown Street' (default value used)   

const city2 = userWithoutAddress.address?.city; 
console.log(city2); // Output: undefined (no error thrown)