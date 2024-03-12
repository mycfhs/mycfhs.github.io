# 服务器连接和配置信息以及常用指令

- [服务器连接和配置信息以及常用指令](#服务器连接和配置信息以及常用指令)
  - [r3090服务器](#r3090服务器)
    - [SSH连接](#ssh连接)
    - [向日葵远程桌面](#向日葵远程桌面)
    - [挂梯子](#挂梯子)
    - [Python解释器路径](#python解释器路径)
    - [环境变量配置](#环境变量配置)
  - [秋秋老师服务器](#秋秋老师服务器)
    - [SSH连接](#ssh连接-1)
    - [Python解释器路径](#python解释器路径-1)
    - [挂梯子](#挂梯子-1)
    - [Python（搭配梯子进行模型下载）](#python搭配梯子进行模型下载)
  - [远程端口映射](#远程端口映射)
  - [文件传输（SCP）](#文件传输scp)
  - [Git克隆（带代理配置）](#git克隆带代理配置)
  - [linux服务器装梯子](#linux服务器装梯子)

## r3090服务器

### SSH连接

```bash
ssh dhw@10.7.12.203
Password: DHW123456
```

### 向日葵远程桌面

- 账户：342973484
- 密码：iiauddhw

### 挂梯子

```bash
cd /home/dhw/yyc_workspace/software/clash && ./clash-linux-amd64-v1.10.0 -f glados.yaml -d .
```

### Python解释器路径

```bash
/home/dhw/anaconda3/envs/yyc_sdxl/bin/python
```

### 环境变量配置

```python
import os

# 设置 HTTP 代理
os.environ["HTTP_PROXY"] = "http://127.0.0.1:5678"
# 设置 HTTPS 代理
os.environ["HTTPS_PROXY"] = "http://127.0.0.1:5678"
os.environ["CUDA_VISIBLE_DEVICES"] = '7'
```

## 秋秋老师服务器

### SSH连接

```bash
ssh measure_2022@10.7.20.107
Password: measure
```

### Python解释器路径

```bash
/home/measure_2022/anaconda3/envs/huggingface/bin/python
```

### 挂梯子

```bash
cd ~/yyc_proj/clash && ./clash-linux-amd64-v1.10.0 -f glados.yaml -d .
```

### Python（搭配梯子进行模型下载）

```python
import os

# 设置 HTTP 代理
os.environ["HTTP_PROXY"] = "http://127.0.0.1:7890"
# 设置 HTTPS 代理
os.environ["HTTPS_PROXY"] = "http://127.0.0.1:7890"
os.environ["CUDA_VISIBLE_DEVICES"] = '7'
```

## 远程端口映射

```bash
ssh zl_3090 -L 127.0.0.1:8888:127.0.0.1:7860   # 本地端口:远程端口
```

## 文件传输（SCP）

```bash
scp -r -v qq_2080:/home/measure_2022/.cache/huggingface/hub/models--stabilityai--stable-diffusion-2-1-base D:/diffusers_models/

scp -r -v stable-diffusion-xl-base-1.0 measure_2022@10.7.20.107:/home/measure_2022/

# 上传服务器到模型 在measure上运行
scp -r -v -P 31168 ~/.cache/huggingface/hub/models--stabilityai--stable-diffusion-xl-base-1.0/snapshots user@reelgepxtcoyhbui.deepln.com:~/.cache/huggingface/hub/models--stabilityai--stable-diffusion-xl-base-1.0/

scp -r -v -P 31168 ~/.cache/huggingface/hub/models--stabilityai--stable-diffusion-xl-base-1.0 user@reelgepxtcoyhbui.deepln.com:~/.cache/huggingface/hub/

scp -r -v D:/diffusers_models/* zl_3090:/home/dhw/.cache/huggingface/hub/

scp -v C:/Users/22862/.ssh/id_rsa.pub zl_3090:/home/dhw/.ssh/authorized_keys
```

## Git克隆（带代理配置）

```bash
git clone https:XXXXX.git --config "http.proxy=127.0.0.1:7890"
```

## linux服务器装梯子

```bash
curl https://glados.rocks/tools/clash-linux.zip -o clash.zip #下载Clash

unzip clash.zip

cd clash

curl https://update.glados-config.com/clash/212636/304c53c/126000/glados-terminal.yaml > glados.yaml #下载您的终端配置文件

chmod +x ./clash-linux-amd64-v1.10.0

./clash-linux-amd64-v1.10.0 -f glados.yaml -d .
```
