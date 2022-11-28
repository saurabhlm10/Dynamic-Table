import React, { useState } from 'react'
import Profile from '../image/profile.png'
import Arrows from '../image/ArrowsDownUp.png'

const TableComponent = ({ data, tableConfig }) => {
  const [nameSorted, setNameSorted] = useState(false)
  const [citySorted, setCitySorted] = useState(false)
  const [emailSorted, setEmailSorted] = useState(false)
  const [joiningDateSorted, setJoiningDateSorted] = useState(false)
  const [roleSorted, setRoleSorted] = useState(false)

  const tableSort = (parameter) => {
    switch (parameter) {
      case 'name':
        data.sort((a, b) => a.person.name > b.person.name ? (!nameSorted ? 1 : -1) : -1)
        setNameSorted(!nameSorted)
        break;
      case 'city':
        data.sort((a, b) => a.city > b.city ? (!citySorted ? 1 : -1) : -1)
        setCitySorted(!citySorted)
        break;
      case 'email':
        data.sort((a, b) => a.email > b.email ? (!emailSorted ? 1 : -1) : -1)
        setEmailSorted(!emailSorted)
        break;
      case 'joiningDate':
        data.sort(function (a, b) {
          const date1 = a.joiningDate.split('/').reverse().join()
          const date2 = b.joiningDate.split('/').reverse().join()

          if (!joiningDateSorted) return date1 < date2 ? -1 : (date1 > date2 ? 1 : 0);
          return date1 > date2 ? -1 : (date1 < date2 ? 1 : 0)
        })
        setJoiningDateSorted(!joiningDateSorted)
        break;
      case 'role':
        data.sort((a, b) => a.role > b.role ? (!roleSorted ? 1 : -1) : -1)
        setRoleSorted(!roleSorted)
        break;
      default: { }

    }
  }

  return (
    <table cellSpacing={0}>
      <tbody>
        <tr>
          <th style={{ display: `${tableConfig.name}` }}>
            <div>
              Name
              <img style={{ display: `${tableConfig.nameSort}` }} src={Arrows} alt="" onClick={() => { tableSort('name') }} />
            </div>
          </th>
          <th style={{ display: `${tableConfig.city}` }}>
            <div>
              City
              <img style={{ display: `${tableConfig.citySort}` }} src={Arrows} alt="" onClick={() => { tableSort('city') }} />
            </div>
          </th>
          <th style={{ display: `${tableConfig.email}` }}>
            <div>
              Email Address
              <img style={{ display: `${tableConfig.emailSort}` }} src={Arrows} alt="" onClick={() => { tableSort('email') }} />
            </div>
          </th>
          <th style={{ display: `${tableConfig.joiningDate}` }}>
            <div>
              Joining Date
              <img style={{ display: `${tableConfig.joiningDateSort}` }} src={Arrows} alt="" onClick={() => { tableSort('joiningDate') }} />
            </div>
          </th>
          <th style={{ display: `${tableConfig.role}` }}>
            <div>
              Role
              <img style={{ display: `${tableConfig.roleSort}` }} src={Arrows} alt="" onClick={() => { tableSort('role') }} />
            </div>
          </th>
        </tr>
        {data.map((data, id) => (
          <tr key={id} style={{
            backgroundColor: `${id % 2 === 0 ? '#ffffff' : '#F5F5F5'}`
          }}>
            <td style={{ display: `${tableConfig.name}` }} className='name'>
              <div>
                <img src={Profile} alt="profile" />
                {data?.person?.name}
              </div>
            </td>
            <td style={{ display: `${tableConfig.city}` }} className='city'>{data.city}</td>
            <td style={{ display: `${tableConfig.email}` }} className='email'>
              <a href="https://www.google.com" target='_blank' rel="noreferrer" >
                {data.email}
              </a>
            </td>
            <td style={{ display: `${tableConfig.joiningDate}` }} className='joiningDate'>{data.joiningDate}</td>
            <td style={{ display: `${tableConfig.role}` }} className='role'>{data.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableComponent