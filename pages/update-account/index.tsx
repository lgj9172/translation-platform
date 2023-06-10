import BasicLayout from "@/layouts/BasicLayout";

// const UpdateAccountSchema = z.object({
//   email: z.string().email("유효하지 않은 이메일이에요."),
//   password: z.string().min(1, "비밀번호가 입력되지 않았어요."),
// });

// type UpdateAccountType = z.infer<typeof UpdateAccountSchema>;

// const UpdateAccountDefaultValues: UpdateAccountType = {
//   email: "",
//   password: "",
// };

export default function Index() {
  // const router = useRouter();

  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors, isValid },
  // } = useForm<UpdateAccountType>({
  //   mode: "onChange",
  //   resolver: zodResolver(UpdateAccountSchema),
  //   defaultValues: UpdateAccountDefaultValues,
  // });

  // const handleUpdateAccount: SubmitHandler<UpdateAccountType> = () => {
  //   router.push("/");
  // };

  // const handleClickBack = () => {
  //   router.back();
  // };

  return <div />;
}

Index.getLayout = BasicLayout;
