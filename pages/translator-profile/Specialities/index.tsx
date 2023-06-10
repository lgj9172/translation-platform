import { specialitiesData } from "@/constants/selects";
import { z } from "zod";

// 객체 배열 specialityValues의 value 타입
type specialityValuesType = (typeof specialitiesData)[number]["value"];

// 객체 배열 specialityValues의 value로만 구성 될 수 있는 배열
const specialityValues: [specialityValuesType, ...specialityValuesType[]] = [
  specialitiesData[0].value,
  ...specialitiesData.slice(1).map((p) => p.value),
];

const SpecialitiesSchema = z.object({
  specialities: z.enum(specialityValues).array().max(3, "전문 분야는 최대 3개 까지만 선택 가능합니다."),
});

type SpecialitiesType = z.infer<typeof SpecialitiesSchema>;

const SpecialitiesDefaultValues: SpecialitiesType = {
  specialities: [],
};

export default function Index() {
  // const [opened, { open, close }] = useDisclosure(false);

  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors, isValid },
  //   setValue,
  // } = useForm<SpecialitiesType>({
  //   mode: "onChange",
  //   resolver: zodResolver(SpecialitiesSchema),
  //   defaultValues: SpecialitiesDefaultValues,
  // });

  // const {
  //   data: fetchedSpecialities,
  //   isFetching,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["test"],
  //   queryFn: readSpecialities,
  // });

  // useEffect(() => {
  //   if (fetchedSpecialities) {
  //     setValue("specialities", fetchedSpecialities);
  //   }
  // }, [fetchedSpecialities, isFetching, setValue]);

  // const { mutate } = useMutation({ mutationFn: updateSpecialities });

  // const handleClickSave: SubmitHandler<SpecialitiesType> = async (data) => {
  //   await mutate({ specialities: data.specialities });
  //   refetch();
  //   close();
  // };

  // const handleInvalidInputs: SubmitErrorHandler<SpecialitiesType> = () => {
  //   const [[, { message }]] = Object.entries(error);
  // };
return <div></div>
  // return (
  //   <Stack spacing="xs">
  //     <Group position="apart">
  //       <Group spacing={0}>
  //         <Title order={6}>전문 분야</Title>
  //         <Tooltip
  //           label="전문 분야를 최대 3개까지 설정해서 의뢰인이 번역사님의 전문 분야를 알 수 있도록 해주세요."
  //           withArrow
  //           multiline
  //           width={300}
  //         >
  //           <ActionIcon variant="transparent" color="dark">
  //             <IconQuestionCircle />
  //           </ActionIcon>
  //         </Tooltip>
  //       </Group>
  //       <Button variant="subtle" size="xs" compact onClick={open}>
  //         수정하기
  //       </Button>
  //     </Group>

  //     <Skeleton height={20} visible={isFetching}>
  //       {fetchedSpecialities && fetchedSpecialities.length === 0 && (
  //         <Alert color="gray">
  //           <Text color="gray">아직 선택 된 전문 분야가 없습니다.</Text>
  //         </Alert>
  //       )}
  //       {fetchedSpecialities && fetchedSpecialities.length > 0 && (
  //         <Group spacing="xs">
  //           {fetchedSpecialities.map((selectedSpeciality) => (
  //             <Badge key={selectedSpeciality}>
  //               {specialitiesData.find(({ value }) => value === selectedSpeciality)?.label}
  //             </Badge>
  //           ))}
  //         </Group>
  //       )}
  //     </Skeleton>

  //     <Modal opened={opened} onClose={close} title="전문 분야">
  //       <form onSubmit={handleSubmit(handleClickSave, handleInvalidInputs)}>
  //         <Stack>
  //           <Controller
  //             name="specialities"
  //             control={control}
  //             render={({ field }) => (
  //               <MultiSelect
  //                 {...field}
  //                 data={[...specialitiesData]}
  //                 label="전문 분야를 선택해 주세요."
  //                 description="최대 3개까지 선택 가능합니다."
  //                 placeholder="어떤 분야의 번역사를 찾고 있나요?"
  //                 error={errors.specialities?.message}
  //                 required
  //               />
  //             )}
  //           />
  //           <Group position="right">
  //             <Button type="submit" disabled={!isValid} loading={isFetching} loaderPosition="center">
  //               저장
  //             </Button>
  //           </Group>
  //         </Stack>
  //       </form>
  //     </Modal>
  //   </Stack>
  );
}
