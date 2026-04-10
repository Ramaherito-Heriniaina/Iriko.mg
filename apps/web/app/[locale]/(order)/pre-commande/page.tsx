'use client';

import { Fragment } from 'react';
import { HeaderLema, ProductList, FooterLema } from '@/components/pre-commande';

export default function PreCommandePage() {
    return (
        <Fragment>
            <HeaderLema />
            <ProductList />
            <FooterLema />
        </Fragment>
    );
}