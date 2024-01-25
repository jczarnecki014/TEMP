
export function GetPatientsListFilteredByTerm(patientsList=[],filterTerm=''){
    patientsList = patientsList.filter((patient)=>{
        const nameToLower = patient.name.toLocaleLowerCase()
        const cityToLower = patient.city.toLocaleLowerCase()
        const addresToLower = patient.addres.toLocaleLowerCase()

        const searchTermLoweCase = filterTerm.toLocaleLowerCase()
        
        return (nameToLower.includes(searchTermLoweCase) || cityToLower.includes(searchTermLoweCase) || addresToLower.includes(searchTermLoweCase) ? true : false) 
    })

    return patientsList;
}