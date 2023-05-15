import ClientWithAuth from "../clients/clientWithAuth";

export type Specialities = Array<
  "contents" | "it" | "finance" | "law" | "medical" | "construction" | "marketing" | "literature" | "etc"
>;

export interface UpdateSpecialitiesRequest {
  specialities: Specialities;
}

export const readSpecialities = () =>
  ClientWithAuth.get<Specialities>("/translator/specialities").then((res) => res.data);

export const updateSpecialities = (input: UpdateSpecialitiesRequest) => {
  const payload = { specialities: input.specialities };
  return ClientWithAuth.put<Specialities>("/translator/specialities", payload).then((res) => res.data);
};
