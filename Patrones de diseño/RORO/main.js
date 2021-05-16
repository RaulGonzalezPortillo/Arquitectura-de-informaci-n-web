function findUsersRole({role, contact = "default@gmail.com", name})
{
    console.log(role);
    console.log(contact);
    console.log(name);

    return {
        role,
        contact,
        name
    }
}

const newObject = findUsersRole(
    {
        role: "Jefe",
        name: "Jair"
    }
);

console.log(newObject);
    