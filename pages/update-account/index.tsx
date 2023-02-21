import BasicLayout from "@/layouts/BasicLayout";
import {
  Badge,
  Box,
  Button,
  Chip,
  Divider,
  Group,
  Paper,
  Select,
  Stack,
  Switch,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { IconArrowRight, IconCheck } from "@tabler/icons";

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

  return (
    <Stack>
      {/* <Group>
        <UnstyledButton onClick={handleClickBack}>
          <IconArrowLeft size={34} />
        </UnstyledButton>
      </Group> */}

      <Stack>
        <Title variant="gradient">프로필 수정</Title>
        {/* <Text fz="sm" fw="bold">
          Fluence; 통번역 전문가 플랫폼
          <br />
          로그인 이후 이용 가능합니다.
        </Text> */}
      </Stack>

      {/* <form onSubmit={handleSubmit(handleUpdateAccount)}> */}
      <Stack>
        <Title order={5}>회원 기본 정보</Title>
        <TextInput label="이름" disabled />
        <TextInput label="이메일" withAsterisk />
        <TextInput label="휴대전화번호" withAsterisk />
        <Switch.Group label="마케팅 정보 수신 동의 여부" orientation="vertical">
          <Switch label="SMS 수신 동의" />
          <Switch label="이메일 수신 동의" />
        </Switch.Group>

        <Divider />
        <Group position="apart">
          <Box>
            <Title order={5}>요율</Title>
            <Text fz="xs">요율을 입력해 주세요. 언어별/기준별로 다르게 입력 가능합니다.</Text>
          </Box>
          <Button variant="white" compact>
            수정
          </Button>
        </Group>
        <Paper p="md" withBorder>
          <Stack>
            <Group position="center">
              <Text>한국어</Text>
              <IconArrowRight />
              <Text>영어</Text>
            </Group>
            <Group position="center">
              <Text>100원 / 글자</Text>
            </Group>
          </Stack>
        </Paper>
        <Paper p="md" withBorder>
          <Stack>
            <Group position="center">
              <Text>영어</Text>
              <IconArrowRight />
              <Text>한국어</Text>
            </Group>
            <Group position="center">
              <Text>100원 / 단어</Text>
            </Group>
          </Stack>
        </Paper>
        <Paper p="md" withBorder>
          <Stack>
            <Group position="center">
              <Select
                placeholder="번역 할 언어"
                data={[
                  { value: "ko-kr", label: "한국어" },
                  { value: "en-us", label: "영어" },
                ]}
              />
              <IconArrowRight />
              <Select
                placeholder="번역 된 언어"
                data={[
                  { value: "ko-kr", label: "한국어" },
                  { value: "en-us", label: "영어" },
                ]}
              />
            </Group>
            <Group position="center">
              <Text>100원 / 단어</Text>
            </Group>
          </Stack>
        </Paper>

        <Divider />
        <Group position="apart">
          <Box>
            <Title order={5}>전문분야</Title>
            <Text fz="xs">본인의 전문 분야를 선택해 주세요.</Text>
          </Box>
          <Button variant="white" compact>
            수정
          </Button>
        </Group>
        <Chip.Group multiple>
          <Chip value="1">문학</Chip>
          <Chip value="2">영화</Chip>
          <Chip value="3">유튜브</Chip>
          <Chip value="4">학술</Chip>
          <Chip value="5">비즈니스</Chip>
          <Chip value="6">IT</Chip>
          <Chip value="7">금융</Chip>
        </Chip.Group>

        <Divider />
        <Group position="apart">
          <Title order={5}>자기소개</Title>
          <Button variant="white" compact>
            수정
          </Button>
        </Group>
        <Paper p="md" withBorder>
          <Text>안녕하세요. 번역사 입니다.</Text>
        </Paper>

        <Divider />
        <Group position="apart">
          <Title order={5}>학력</Title>
          <Button variant="white" compact>
            수정
          </Button>
        </Group>
        <Paper p="md" withBorder>
          <Stack>
            <Group>
              <Text>중앙대학교 통번역대학원 석사 졸업</Text>
              <Badge
                variant="gradient"
                gradient={{ from: "blue", to: "green", deg: 90 }}
                leftSection={<IconCheck size={10} />}
              >
                인증완료
              </Badge>
            </Group>
            <Text size="xs">한영동시통역 전공</Text>
            <Text size="xs">2013.03 - 2015.01</Text>
          </Stack>
        </Paper>

        <Divider />
        <Group position="apart">
          <Title order={5}>경력</Title>
          <Button variant="white" compact>
            수정
          </Button>
        </Group>
        <Paper p="md" withBorder>
          <Stack>
            <Group>
              <Text>Cafe24</Text>
            </Group>
            <Text size="xs">
              통번역사
              <br />
              하루종일 통역 번역만 함
            </Text>
            <Text size="xs">2017.10 - 2018.11</Text>
          </Stack>
        </Paper>

        <Divider />
        <Group position="apart">
          <Title order={5}>자격증</Title>
          <Button variant="white" compact>
            수정
          </Button>
        </Group>

        <Divider />
        <Group position="apart">
          <Title order={5}>결제수단</Title>
          <Button variant="white" compact>
            수정
          </Button>
        </Group>

        <Divider />
        <Group position="apart">
          <Title order={5}>샘플번역</Title>
          <Button variant="white" compact>
            수정
          </Button>
        </Group>

        <Divider />
        <Group position="apart">
          <Title order={5}>수정/환불정책</Title>
          <Button variant="white" compact>
            수정
          </Button>
        </Group>
      </Stack>
      {/* </form> */}
    </Stack>
  );
}

Index.getLayout = BasicLayout;
