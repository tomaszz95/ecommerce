import brandLogos from '../../../../constans/brandLogos'

import capitalizeFirstLetter from '../../../utils/capitalizeFirstLetter'
import { filterTypes, productType } from '../../../../types/types'

import styles from './CompanyFilters.module.css'

type ComponentType = {
    products: productType[]
    filters: filterTypes
    onFilterChange: (newFilters: Partial<filterTypes>) => void
}

const CompanyFilters = ({ filters, onFilterChange, products }: ComponentType) => {
    const handleCompanyChange = (company: string) => {
        const newSelectedCompanies = filters.selectedCompanies.includes(company)
            ? filters.selectedCompanies.filter((c) => c !== company)
            : [...filters.selectedCompanies, company]

        onFilterChange({ selectedCompanies: newSelectedCompanies })
    }

    const companyProductCounts = brandLogos.map((brand) => {
        const capitalizeBrand = capitalizeFirstLetter(brand.brand)
        const count = products.filter((product) => product.company === capitalizeBrand).length
        return { brand: capitalizeBrand, count }
    })

    return (
        <>
            {companyProductCounts.map(({ brand, count }) => (
                <div key={brand} className={styles.companyList}>
                    <input
                        type="checkbox"
                        checked={filters.selectedCompanies.includes(brand)}
                        onChange={() => handleCompanyChange(brand)}
                        aria-label="Company filter"
                    />
                    <p>
                        {brand} ({count})
                    </p>
                </div>
            ))}
        </>
    )
}

export default CompanyFilters
