export const CompossersTableRow = ({ name, surname, born, died, photo_url }) => {



    return (
        <tr>
            <td><img src={photo_url} alt="" width="200px"  height="250px" /></td>
            <td>{name} {surname}</td>
            <td>{born}-{died}</td>
        </tr>
    )


}