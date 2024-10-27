import React from 'react'

import brandLogos from '../../../constans/brandLogos'
import { productType, filterTypes } from '../../../types/types'
import capitalizeFirstLetter from '../../../components/utils/capitalizeFirstLetter'

import styles from './FiltrationSection.module.css'

type ComponentType = {
    products: productType[]
    filters: filterTypes
    onFilterChange: (newFilters: Partial<filterTypes>) => void
}

const FiltrationSection = ({ products, filters, onFilterChange }: ComponentType) => {
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
        <section className={styles.filtrationSection}>
            <div className={styles.priceFiltersBox}>
                <h3>Price</h3>
                <div>
                    <div>
                        <span>$</span>
                        <input
                            placeholder="from"
                            value={filters.priceFrom ?? ''}
                            onChange={(e) => onFilterChange({ priceFrom: Number(e.target.value) || null })}
                        />
                    </div>
                    <div>
                        <span>- $</span>
                        <input
                            placeholder="to"
                            value={filters.priceTo ?? ''}
                            onChange={(e) => onFilterChange({ priceTo: Number(e.target.value) || null })}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.companyFiltersBox}>
                <h3>Company</h3>
                {companyProductCounts.map(({ brand, count }) => (
                    <div key={brand}>
                        <input
                            type="checkbox"
                            checked={filters.selectedCompanies.includes(brand)}
                            onChange={() => handleCompanyChange(brand)}
                        />
                        <p>
                            {brand} ({count})
                        </p>
                    </div>
                ))}
            </div>
            <div className={styles.availableFiltersBox}>
                <h3>Available</h3>
                <div>
                    <input
                        type="checkbox"
                        checked={filters.availableOnly}
                        onChange={(e) => onFilterChange({ availableOnly: e.target.checked })}
                    />
                    <p>Show available products</p>
                </div>
            </div>
            <div className={styles.availableFiltersBox}>
                <h3>Promotions</h3>
                <div>
                    <input
                        type="checkbox"
                        checked={filters.promotionsOnly}
                        onChange={(e) => onFilterChange({ promotionsOnly: e.target.checked })}
                    />
                    <p>Show products on sale</p>
                </div>
            </div>
        </section>
    )
}

export default FiltrationSection
