import capitalizeFirstLetter from '../../../../components/utils/capitalizeFirstLetter'

import brandLogos from '../../../../constans/brandLogos'

import { filterTypes } from '../../../../types/types'

import styles from './CompanyFilters.module.css'

type ComponentType = {
    company: string[]
    onFilterChange: (value: Partial<filterTypes>) => void
}

const CompanyFilters = ({ company, onFilterChange }: ComponentType) => {
    const companyFilterHandler = (brandName: string) => {
        const updatedCompanies = company.includes(brandName)
            ? company.filter((name) => name !== brandName)
            : [...company, brandName]

        onFilterChange({ company: updatedCompanies })
    }

    return (
        <>
            {brandLogos.map(({ brand }) => {
                const brandName = capitalizeFirstLetter(brand)
                return (
                    <div key={brandName} className={styles.companyList}>
                        <input
                            type="checkbox"
                            checked={company.includes(brandName)}
                            onChange={() => companyFilterHandler(brandName)}
                            aria-label="Company filter"
                        />
                        <p>{brandName}</p>
                    </div>
                )
            })}
        </>
    )
}

export default CompanyFilters
