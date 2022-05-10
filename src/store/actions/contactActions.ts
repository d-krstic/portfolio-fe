import { createAction } from '@reduxjs/toolkit';
import { ContactForm } from 'src/components/ui/Form/Form';

export const CONTACT_SLICE = 'contact';

export const submitForm = createAction<ContactForm>(`${CONTACT_SLICE}/submitForm`);

