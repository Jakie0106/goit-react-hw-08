import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContact = (state) => state.contact.contacts.items;
export const selectLoading = (state) => state.contact.contacts.loading;
export const selectError = (state) => state.contact.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContact, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(
      (contact) =>
        contact.name
          .toLowerCase()
          .trim()
          .includes(filter.toLowerCase().trim()) ||
        contact.number.includes(filter)
    );
  }
);
